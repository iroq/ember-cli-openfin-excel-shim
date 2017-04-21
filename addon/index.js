var exportObject;
try {
    exportObject = window.fin.desktop.Excel || {};
} catch (e) {
    exportObject = {};
}

export default exportObject;
