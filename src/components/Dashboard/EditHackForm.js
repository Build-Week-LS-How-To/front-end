import React ,{useState,useEffect}from 'react';
//STYLES
import '../../styles/edithack.scss';
import {
    Form,
    Input,
    FormGroup,
    Button,
    Label,
} from 'reactstrap';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { useParams, useHistory } from "react-router-dom";
import {fetchHacks} from "../../actions/dashboard-hacks";
import { connect } from 'react-redux'

function EditHackForm(props) {
const {id} = useParams();
const { push } = useHistory();
const [item, setItem] = useState([{
        title:'',
        description:'',
        id:Date.now()
    }]) ; 

// useEffect(()=>{
//         axiosWithAuth()
//         .get(`/howTo/${id}`)
//         .then(res=>{console.log('update',res);
//       setItem(res.data)})
//         .catch(err=>console.log(err))
// },[id])
const changeHandler = e =>{
    setItem({...item, [e.target.name]:e.target.value})

}
// const submitPost = (e) =>{
//     e.preventDefault();
//     axiosWithAuth()
//     .put(`https://how-to-1.herokuapp.com/api/howTo/${id}`,item)
//     .then(res=>{
//         const newItems = props.movieList.map(newItm => {
//             if (newItm.id === item.id) {
//               return item;
//             }
//             return newItm;
//           });
//        props.setMovieList(newItems);
//        push('/');
//     })

// }
    return (
        <div>
            {props.fetchHacks(id)}
            <Form >
                <FormGroup>
                    <Label>Title</Label>
                    <Input value={item.map(e=>e.title)} className='editinput' type="text" name="title" onChange={changeHandler}/>
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input value={item.map(e=>e.description)} className='editinput' type="text" name="description" onChange={changeHandler}/>
                </FormGroup>
                <Button>Save</Button>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.hacksReducer.isFetching,
        hacks: state.hacksReducer.hacks,
        error: state.hacksReducer.error
    }
}

export default connect(
    mapStateToProps,
    { fetchHacks }
)(EditHackForm) 