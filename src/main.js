/* Container */
const container             = document.querySelector('.container');
const containerChild        = document.querySelectorAll('.box.child');

/* Flex Container Item */
const flexDirectionBox      = document.querySelectorAll('.direction');
const flexContentBox        = document.querySelectorAll('.flexcontent');
const flexItemsBox          = document.querySelectorAll('.flexitems');
const flexWrapBox           = document.querySelectorAll('.flexwrap');

/* Flex Child Item*/
const childFlexDirectionBox = document.querySelectorAll('.fcdirection');
const childFlexContentBox   = document.querySelectorAll('.fcflexcontent');
const childFlexItemsBox     = document.querySelectorAll('.fcflexitems');


/* Flex container item event */
flexDirectionBox.forEach(item => {
    item.addEventListener('click', (e) => {
        const {id} = e.target
        switchFlex(id)
    })
})

flexContentBox.forEach(item => {
    item.addEventListener('click', (e) => {
        const {id} = e.target
        switchFlex(id)
    })
})

flexItemsBox.forEach(item => {
    item.addEventListener('click', (e) => {
        const {id} = e.target
        switchFlex(id)
    })
})

flexWrapBox.forEach(item => {
    item.addEventListener('click', (e) => {
        const {id} = e.target
        switchFlex(id)
    })
})

/* Flex child item & child event*/
containerChild.forEach(childFlex => {

    childFlexDirectionBox.forEach(item => {
        item.addEventListener('click', (e) => {
            const {id} = e.target
            switchFlex(id, childFlex)
        })
    })

    childFlexContentBox.forEach(item => {
        item.addEventListener('click', (e) => {
            const {id} = e.target
            switchFlex(id, childFlex)
        })
    })
    
    childFlexItemsBox.forEach(item => {
        item.addEventListener('click', (e) => {
            const {id} = e.target
            switchFlex(id, childFlex)
        })
    })

})


/* Function switch flex property (parent/child) */
function switchFlex(id, flexItem = null) {
    switch (id) {

    // 1. FLEX CONTAINER
        /* Flex direction */
        case 'row':
            container.style.flexDirection = 'row';
            break;
        case 'rowrev':
            container.style.flexDirection = 'row-reverse';
            break;
        case 'col':
            container.style.flexDirection = 'column';
            break;
        case 'colrev':
            container.style.flexDirection = 'column-reverse';
            break;
            
        /* Justify content */
        case 'between':
            container.style.justifyContent = 'space-between';
            break;
        case 'around':
            container.style.justifyContent = 'space-around';
            break;
        case 'evenly':
            container.style.justifyContent = 'space-evenly';
            break;
        case 'start':
            container.style.justifyContent = 'start';
            break;
        case 'end':
            container.style.justifyContent = 'end';
            break;

        /* Align items */
        case 'center':
            container.style.alignItems = 'center';
            break;
        case 'flexs':
            container.style.alignItems = 'start';
            break;
        case 'flexe':
            container.style.alignItems = 'end';
            break; 
        case 'flexl':
            container.style.alignItems = 'left';
            break;
        case 'flexr':
            container.style.alignItems = 'right';
            break;
        // case 'flexstretch':
            container.style.alignItems = 'stretch';
            break;

        /* Flex wrap */
        case 'nowrap':
            container.style.flexWrap = 'nowrap';
            break;
        case 'wrap':
            container.style.flexWrap = 'wrap';
            break;
        case 'wraprev':
            container.style.flexWrap = 'wrap-reverse';
            break;
    
    // 2. FLEX CHILD CONTAINER
        /* Flex direction */
        case 'fcrow':
            flexItem.style.flexDirection = 'row';
            break;
        case 'fcrowrev':
            flexItem.style.flexDirection = 'row-reverse';
            break;
        case 'fccol':
            flexItem.style.flexDirection = 'column';
            break;
        case 'fccolrev':
            flexItem.style.flexDirection = 'column-reverse';
            break;
            
        /* Justify content */
        case 'fcbetween':
            flexItem.style.justifyContent = 'space-between';
            break;
        case 'fcaround':
            flexItem.style.justifyContent = 'space-around';
            break;
        case 'fcevenly':
            flexItem.style.justifyContent = 'space-evenly';
            break;
        case 'fcstart':
            flexItem.style.justifyContent = 'start';
            break;
        case 'fcend':
            flexItem.style.justifyContent = 'end';
            break;

        /* Align items */
        case 'fccenter':
            flexItem.style.alignItems = 'center';
            break;
        case 'fcflexs':
            flexItem.style.alignItems = 'start';
            break;
        case 'fcflexe':
            flexItem.style.alignItems = 'end';
            break; 
        case 'fcflexl':
            flexItem.style.alignItems = 'left';
            break;
        case 'fcflexr':
            flexItem.style.alignItems = 'right';
            break;
        case 'fcstretch':
            flexItem.style.alignItems = 'stretch';
            break;

        default:
            break;
    }
}