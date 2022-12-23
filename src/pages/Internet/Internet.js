import React from 'react'
import axios from 'axios'
import { modalClasses } from '@mui/material'

function Internet() {

    const[internets, setInternets] = React.useState([])
    const [operators, setOperators] = React.useState([])

    const loadInternets = async()=>{
        const all = await axios.get('http://localhost:2022/Phone-Internet/internet/all')
        setInternets(all.data)
        console.log(all.data)
    }

    const loadOperators = async()=>{
      const all = await axios.get('http://localhost:2022/operator/all')
      setOperators(all.data)
      console.log(all.data)
      
    }

    const loadOperatorById = async(e)=>{
      const id = e.target.value
      const all = await axios.get('http://localhost:2022/operator/all')
      setOperators(all.data)
      console.log(all.data)
      
    }

    const deleteInternet = async(e) => {
      console.log(e.target.value)
      const id = e.target.value
      document.getElementById('deleteId').value = id


    }

    const confirmDeleteInternet = async(e) => {
      console.log(e.target.value)
      const id = e.target.value
      await axios.delete('http://localhost:2022/Phone-Internet/internet/delete?id='+id)
      loadInternets()

    }

    const editInternet = async(e) => {
      console.log(e.target.value)


    }

    const updateInternet = async(e) => {
      console.log(e.target.value)


    }

    React.useEffect(()=>{
        loadInternets()
        loadOperators()
    },[])

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className='row pb-0'>
            <div className='col-11'>
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Internet Bills /</span> list</h4>
            </div>
            <div className='col-1 pt-3'>
                <a href="/internet/add" className="btn btn-primary">add</a>
            </div>
        </div>
        <div className="card">
                <h5 className="card-header">Internet Bills</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Reference</th>
                        <th>Number</th>
                        <th>Price</th>
                        <th>Forfait</th>
                        <th>Operator</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {internets.map((internet) => (
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{internet.internet_id}</strong></td>
                        <td>{internet.reference}</td>
                        <td>{internet.number}</td>
                        <td>{internet.price} DH</td>
                        <td>{internet.forfait}</td>
                        <td>{internet.operator.name}</td>
                        <td>{internet.date}</td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <button className="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#editModal" onClick={(e)=>editInternet(e)}  value={internet.internet_id}
                                ><i className="bx bx-edit-alt me-1"></i> Edit</button>
                              <button className="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#deleteModal" onClick={(e)=>deleteInternet(e)} value={internet.internet_id}
                                ><i className="bx bx-trash me-1"></i> Delete</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel1">Edit Internet Bill </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col mb-3">
                                    <label for="nameBasic" className="form-label">Number</label>
                                    <input type="text" id="editNumber" className="form-control" placeholder="Enter Name" />
                                  </div>
                                </div>
                                <div className="row g-2">
                                  <div className="col mb-0">
                                    <label for="emailBasic" className="form-label">Amount</label>
                                    <input type="text" id="editAmount" className="form-control" placeholder="xxxx@xxx.xx" />
                                  </div>
                                  <div className="col mb-0">
                                    <label for="dobBasic" className="form-label">Forfait</label>
                                    <select className="form-select" id="exampleFormControlSelect1" name='forfait' aria-label="Default select example">
                                      <option selected>--Select Forfait</option>
                                      <option value="*3">*3</option>
                                      <option value="*6">*6</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <label for="nameBasic" className="form-label">Operator</label>
                                    <select className="form-select" id="exampleFormControlSelect1" name='operator' aria-label="Default select example">
                                      <option selected>--Select Operator</option>
                                      {operators.map((operator) => (
                                      <option value={JSON.stringify(operator)}>{operator.name}</option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <label for="nameBasic" className="form-label">Email</label>
                                    <input type="text" id="editEmail" className="form-control" placeholder="Enter Name" />
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel1">Delete Internet Bill </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">Are you sure you want to delete this internet bill.</div>
                              <div className="modal-footer">
                              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button
                                  className="btn btn-primary"
                                  id="deleteId"
                                  onClick={(e)=>confirmDeleteInternet(e)}
                                  data-bs-dismiss="modal"
                                >
                                  Yes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
    </div>
  )
}

export default Internet