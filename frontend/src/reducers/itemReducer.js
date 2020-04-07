import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS } from '../actions/types';

const initialState = {
       items:[{  step:1,
            field:'',
            email:'',
            password:'',
            d_project_cou:'',
            m_project_cou:'',
            describes:'',
            education:'',
            materials:'',
            location:'',
        }]
}


export default function(state = initialState,action ) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: [action.payload,...state.items]
            }
        default:
            return state
    }
}