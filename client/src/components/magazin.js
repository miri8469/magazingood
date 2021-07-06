import { connect } from "react-redux"
import React, { useEffect, useState } from "react"
import produce from "immer";
import actions from '../redux/actions'
 

function mapStateToProps (state) {

    return{

        magazin: state.reducerMagazin.magazin

    }
    
}


export default connect( mapStateToProps)( function myMagazin(props) {
    
  const {magazin} = props.magazin

return(
    <>
<div class= "container-fluid">
   

</div>

    </>
)

}
)


