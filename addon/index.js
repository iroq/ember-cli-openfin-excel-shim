const Excel = window.fin.desktop.Excel;

const openfinProperties = Object.keys(window.fin.desktop);
const openfinEnabled = !(
    openfinProperties.length === 1 &&
    openfinProperties[0] === 'Excel'
);

export {
    Excel as default,
    openfinEnabled
};
