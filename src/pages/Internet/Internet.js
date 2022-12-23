import React from 'react'
import axios from 'axios'

function Internet() {

    const[internets, setInternets] = React.useState([])

    const loadInternets = async()=>{
        const all = await axios.get('http://localhost:2022/Phone-Internet/internet/all')
        setInternets(all.data)
        console.log(all.data)
    }

    React.useEffect(()=>{
        loadInternets()
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
        <div class="card">
                <h5 class="card-header">Internet Bills</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead class="table-light">
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
                    <tbody class="table-border-bottom-0">
                        {internets.map((internet) => (
                      <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{internet.internet_id}</strong></td>
                        <td>{internet.reference}</td>
                        <td>{internet.number}</td>
                        <td>{internet.price} DH</td>
                        <td>{internet.forfait}</td>
                        <td>{internet.operator.name}</td>
                        <td>{internet.date}</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="bx bx-edit-alt me-1"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
    </div>
  )
}

export default Internet