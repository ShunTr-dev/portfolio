import jsPDF from 'jspdf'
import { aboutMe } from '../data/aboutMe.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { projects } from '../data/projects.js'

export function generateCV(envVars = {}) {
    const doc = new jsPDF()

    // Configuración de colores
    const primaryColor = [6, 182, 212] // cyan-500
    const secondaryColor = [147, 51, 234] // purple-600
    const textColor = [31, 41, 55] // gray-800
    const lightGray = [156, 163, 175] // gray-400

    let yPos = 20
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height
    const margin = 20
    const maxWidth = pageWidth - margin * 2

    // Función para añadir nueva página si es necesario
    const checkPageBreak = (neededSpace = 20) => {
        if (yPos + neededSpace > pageHeight - margin) {
            doc.addPage()
            yPos = margin
            return true
        }
        return false
    }

    // Función para añadir texto con salto de línea automático
    const addWrappedText = (text, x, y, maxWidth, lineHeight = 7) => {
        const lines = doc.splitTextToSize(text, maxWidth)
        lines.forEach((line, index) => {
            checkPageBreak(lineHeight)
            doc.text(line, x, y + index * lineHeight)
        })
        return lines.length * lineHeight
    }

    // === ENCABEZADO ===
    // Nombre
    doc.setFontSize(28)
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'bold')
    doc.text(envVars.PORTFOLIO_NAME || 'Pablo Martínez', margin, yPos)
    yPos += 10

    // Frase descriptiva
    doc.setFontSize(11)
    doc.setTextColor(...lightGray)
    doc.setFont('helvetica', 'normal')
    const descriptionLines = doc.splitTextToSize(envVars.DESCRIPTION_PHRASE || '', maxWidth)
    descriptionLines.forEach((line) => {
        doc.text(line, margin, yPos)
        yPos += 5
    })
    yPos += 5

    // Datos de contacto
    doc.setFontSize(10)
    doc.setTextColor(...textColor)
    doc.text(`Email: ${envVars.EMAIL || ''}`, margin, yPos)
    yPos += 5
    doc.text(`GitHub: ${envVars.GITHUB_URL || ''}`, margin, yPos)
    yPos += 5
    doc.text(`Web: ${envVars.WEB_URL || ''}`, margin, yPos)
    yPos += 10

    // Línea separadora
    doc.setDrawColor(...primaryColor)
    doc.setLineWidth(0.5)
    doc.line(margin, yPos, pageWidth - margin, yPos)
    yPos += 10

    // === SOBRE MÍ ===
    checkPageBreak(30)
    doc.setFontSize(16)
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'bold')
    doc.text('SOBRE MÍ', margin, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setTextColor(...textColor)
    doc.setFont('helvetica', 'normal')

    aboutMe.cv.forEach((paragraph) => {
        const height = addWrappedText(paragraph, margin, yPos, maxWidth)
        yPos += height + 3
    })

    yPos += 5

    // === EDUCACIÓN ===
    checkPageBreak(30)
    doc.setFontSize(16)
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'bold')
    doc.text('EDUCACIÓN', margin, yPos)
    yPos += 8

    education.forEach((edu, index) => {
        checkPageBreak(15)

        doc.setFontSize(10)
        doc.setTextColor(...textColor)

        // Título en negrita
        doc.setFont('helvetica', 'bold')
        doc.text(edu.title, margin, yPos)

        // Obtener el ancho del título para continuar después
        const titleWidth = doc.getTextWidth(edu.title)

        // Institución y año en la misma línea, después del título
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...lightGray)
        //doc.text(` - ${edu.institution} | ${edu.year}`, margin + titleWidth, yPos)
        doc.text(` - ${edu.institution}`, margin + titleWidth, yPos)

        yPos += 7

        if (index < education.length - 1) {
            yPos += 2
        }
    })

    yPos += 5

    // === CERTIFICACIONES ===
    checkPageBreak(30)
    doc.setFontSize(16)
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'bold')
    doc.text('CERTIFICACIONES', margin, yPos)
    yPos += 8

    certifications.forEach((cert, index) => {
        checkPageBreak(15)

        doc.setFontSize(10)
        doc.setTextColor(...textColor)

        // Título en negrita
        doc.setFont('helvetica', 'bold')
        doc.text(cert.title, margin, yPos)

        // Obtener el ancho del título para continuar después
        const titleWidth = doc.getTextWidth(cert.title)

        // Institución y año en la misma línea, después del título
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...lightGray)
        doc.text(` - ${cert.institution} | ${cert.year}`, margin + titleWidth, yPos)

        yPos += 6
    })

    yPos += 5

    // === PROYECTOS DESTACADOS ===
    checkPageBreak(30)
    doc.setFontSize(16)
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'bold')
    doc.text('PROYECTOS DESTACADOS', margin, yPos)
    yPos += 8

    projects.forEach((project, index) => {
        checkPageBreak(40)

        // Título del proyecto
        doc.setFontSize(12)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(...secondaryColor)
        doc.text(project.title, margin, yPos)
        yPos += 6

        // Rol y fechas
        if (project.role) {
            doc.setFontSize(9)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(...lightGray)
            const dateStr = project.dates ? `${project.dates.start} - ${project.dates.end}` : ''
            doc.text(`${project.role} | ${dateStr}`, margin, yPos)
            yPos += 5
        }

        // Descripción
        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...textColor)
        const descHeight = addWrappedText(project.description, margin, yPos, maxWidth, 5)
        yPos += descHeight + 3

        // Tecnologías
        if (project.technologies && project.technologies.length > 0) {
            doc.setFontSize(9)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(...textColor)
            doc.text('Tecnologías: ', margin, yPos)

            doc.setFont('helvetica', 'normal')
            doc.setTextColor(...lightGray)
            const techText = project.technologies.join(', ')
            const techHeight = addWrappedText(techText, margin + 25, yPos, maxWidth - 25, 5)
            yPos += techHeight + 3
        }

        // URL del proyecto
        if (project.web_url) {
            doc.setFontSize(9)
            doc.setTextColor(...primaryColor)
            doc.text(`Web: ${project.web_url}`, margin, yPos)
            yPos += 5
        }

        if (index < projects.length - 1) {
            yPos += 5
        }
    })

    // Guardar el PDF
    const fileName = `CV_${envVars.PORTFOLIO_NAME?.replace(/\s+/g, '_') || 'Portfolio'}.pdf`
    doc.save(fileName)
}
