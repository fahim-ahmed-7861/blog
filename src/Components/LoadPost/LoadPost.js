import React, { useDebugValue,useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../redux/actions/fetchPost';

const LoadPost = (props) => {

   

   const {post}=props;

   console.log(post);

  

  

   useEffect(() => {
       
    props.fetchPost('posts');
    

   

   }, []);


    return (
        <div>
            <h1>POST</h1>

            <h1>{props.post.length}</h1>

            {
                post.map(d=><li key={d.id}>{d.title}</li>)
            }

          
        </div>
    );
};


const mapStateToProps=state=>
{
    
     return {
        post : state.postList
     }
}

const mapDispatchToProps=
{
    fetchPost:fetchPost
}

export default connect(mapStateToProps,mapDispatchToProps)( LoadPost);