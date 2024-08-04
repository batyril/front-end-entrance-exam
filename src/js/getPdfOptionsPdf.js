export function getPdfOptions() {
  const isPortrait = window.innerWidth < 850;

  return {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: isPortrait ? 'portrait' : 'portrait',
    },
  };
}
