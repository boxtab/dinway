const smartgridSettings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1160px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        xxx: {
            width: "1500px",
        },
        xl: {
            width: "1200px",
        },
        bp1250: {
            width: "1250px",
        },
        lg: {
            width: "1000px",
        },
        bp1050: {
            width: "1050px",
        },
        bp900: {
            width: "900px",
        },
        md: {
            width: "768px",
        },
        bp730: {
            width: "730px",
        },
        bp620: {
            width: "620px",
        },
        sm: {
            width: "576px",
        },
        xs: {
            width: "450px",
        },
        xxs: {
            width: "375px",
        }
    }
};

export default smartgridSettings;