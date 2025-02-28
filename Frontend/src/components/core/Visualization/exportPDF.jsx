import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";

const exportPDF = async () => {
  try {
    const element = document.getElementById("pdf-content");

    if (!element) {
      console.error("Element not found!");
      return;
    }

    // Capture the element as an image
    const dataUrl = await domtoimage.toPng(element, {
      quality: 0.95,
      bgcolor: "#000", // Change background color if needed
    });

    const pdf = new jsPDF("p", "mm", "a4"); // A4 size: 210x297 mm
    const imgWidth = 210; // Full A4 width
    const pageHeight = 297; // Full A4 height

    // Get image dimensions
    const imgProps = pdf.getImageProperties(dataUrl);
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content overflows
    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("exported.pdf");
  } catch (error) {
    console.error("PDF export failed:", error);
  }
};

export default exportPDF;
