import React,{useState,useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { withLocalize } from 'react-localize-redux';
import { useSelector,useDispatch } from 'react-redux';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {appConstants} from '../../../_Constants/app.constants';
import {USER_LIST} from "../../Actions/actionTypes";

const UserList = ({history}) => {
    const dispatch = useDispatch();

    const [isSignupForm,setIsSignupForm] = useState(false);
    const [isSignInForm,setIsSignInForm] = useState(false);

    const empObject = useSelector((state)=>{
       return state.user;
    });

    const getUserList=async()=>{
      if(!Object.keys(empObject).length){
        let data1 = {
          "name":"test"
        }
        dispatch({type:USER_LIST,payload:appConstants.userData});
      }
    }

    useEffect(()=>{
        getUserList();
    },[]);

    return (
         <div>
            <section>
              <div className="container">
                <div className="row">
                  <div className="form_tops_fields buttons_d">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="heading_p"><h2>Employee List</h2></div>
                      </div>
                     </div>
                     <BootstrapTable
                      deleteRow={false}
                      data={empObject.list && empObject.list.user}
                      search={false}
                      scrollTop={'Bottom'}
                      pagination={true}
                      >
                      <TableHeaderColumn hidden={true} tdAttr={{ 'data-attr': 'id' }} dataField='id' dataSort={true} isKey searchable={false}>Id</TableHeaderColumn>
                      <TableHeaderColumn dataField='name' dataSort={true} searchable={false}>Name</TableHeaderColumn>
                      <TableHeaderColumn dataField='age' dataSort={true} searchable={false}>Age</TableHeaderColumn>
                      <TableHeaderColumn dataField='gender' dataSort={true} searchable={false}>Gender</TableHeaderColumn>
                      <TableHeaderColumn dataField='email' dataSort={true} searchable={false}>Email</TableHeaderColumn>
                      </BootstrapTable>
                   </div>
                  </div>
                </div>
            </section>
         </div>
);
}

export default withLocalize(withRouter(UserList));
