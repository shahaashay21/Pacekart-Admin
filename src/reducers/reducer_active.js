export default function (state = null, action){
    switch(action.type){
        case 'EXAMPLE_SELECTED':
            return action.payload
        default:
            return state;
    }
}