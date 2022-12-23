import React from 'react'
import axios from 'axios'

function Phone() {

    const[phones, setPhones] = React.useState([])

    const loadPhones = async()=>{
        const all = await axios.get('http://localhost:2022/Phone-Internet/phone/all')
        setPhones(all.data)
        console.log(all.data)
    }

    const deletePhone = async(e) => {
      console.log(e.target.value)


    }

    const editPhone = async(e) => {
      console.log(e.target.value)


    }

    React.useEffect(()=>{
        loadPhones()
    },[])


  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className='row pb-0'>
            <div className='col-11'>
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Phone Bills /</span> list</h4>
            </div>
            <div className='col-1 pt-3'>
                <a href="/phone/add" className="btn btn-primary">add</a>
            </div>
        </div>
        <div class="card">
                <h5 class="card-header">Light Table head</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead class="table-light">
                      <tr>
                        <th>#</th>
                        <th>Reference</th>
                        <th>Number</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        {phones.map((phone)=>(
                      <tr>
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{phone.phoneId}</strong></td>
                        <td>{phone.reference}</td>
                        <td>{phone.number}</td>
                        <td>{phone.price} DH</td>
                        <td>
                        {phone.amount} min
                        </td>
                        <td>{phone.date}</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <button class="dropdown-item"
                                ><i class="bx bx-edit-alt me-1" onClick={(e)=>editPhone(e)}  value={phone.phoneId}></i> Edit</button>
                              <button class="dropdown-item" onClick={(e)=>deletePhone(e)} value={phone.phoneId}
                                ><i class="bx bx-trash me-1"></i> Delete</button>
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

export default Phone