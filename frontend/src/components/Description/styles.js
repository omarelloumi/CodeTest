import Image from './assets/Item.svg'

export const styles ={
    itemHeader: {
        backgroundImage: `url(${Image})`, 
        backgroundSize: '100% 100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width : 428,
        height : 520,
    },
    armorLeft: {
        position: 'absolute',
        left: '30%',
        top: '37%',
    },
    lineLeft: {
        position: 'absolute',
        left: '26%',
        top: '44%',
    },
    armorRight: {
        position: 'absolute',
        right: '30%',
        top: '17%',
    },
    lineRight: {
        position: 'absolute',
        right: '26%',
        top: '24%',
    },
    armorDown: {
        position: 'absolute',
        right: '10%',
        top: '38%',
    },
    lineDown: {
        position: 'absolute',
        right: '20.5%',
        top: '47%',
    },
    item : {
        paddingBottom: '4%',
        paddingLeft: '10%'
    },
}