import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

const exportPDF = async () => {
  try {
    const element = document.getElementById("pdf-content");
    
    if (!element) {
      console.error("Element not found!");
      return;
    }
    
    const dataUrl = await domtoimage.toPng(element, {
      quality: 0.95,
      bgcolor: "#121212", 
      style: {
        'color-scheme': 'light',
      }
    });
    
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; 
    
    const imgProps = pdf.getImageProperties(dataUrl);
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    
    pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save("exported.pdf");
    
  } catch (error) {
    console.error("PDF export failed:", error);
  }
};

export default exportPDF;