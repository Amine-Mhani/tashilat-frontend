import React from 'react'
import axios from 'axios'
import Operator from '../Operator/Operator'

function AddPhone() {

  const [operators, setOperators] = React.useState([])

  const [email, setEmail] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [operat, setOperator] = React.useState('')
  const [price, setPrice] = React.useState('')

  const loadOperators = async()=>{
    const all = await axios.get('http://localhost:2022/operator/all')
    setOperators(all.data)
    console.log(all.data)
    
  }

  const handleCreation = async(e) =>{
    e.preventDefault()
    const operator = JSON.parse(operat)
    const phone = {email, number, operator, price}
    console.log(phone)
    await axios.post('http://localhost:2022/Phone-Internet/phone/add',phone)

    setNumber("")
    setEmail("")
    setOperator("")
    setPrice("")
    
    alert('phone was create successfully')

  }

  React.useEffect(()=>{
      loadOperators()
  },[])

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className='row pb-0'>
            <div className='col-11'>
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Phone Bills /</span> add</h4>
                <div className="col-xxl" style={{ width: '70%', margin: 'auto'}}>
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Add Phone Bill</h5>

                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label" for="basic-default-name">Number</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" name="number" value={number} id="basic-default-name" placeholder="+212-.." onChange={(e)=>setNumber(e.target.value)}/>
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label" for="basic-default-message">Email</label>
                          <div className="col-sm-10">
                          <div className="input-group input-group-merge">
                              <input type="text" id="basic-default-email" name="email" value={email} className="form-control" placeholder="email.doe" aria-label="john.doe" aria-describedby="basic-default-email2" onChange={(e)=>setEmail(e.target.value)}/>
                              <span className="input-group-text" id="basic-default-email2">@example.com</span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col mb-3 col-6 border-end">
                            <label className="col-sm-2 col-form-label" for="basic-default-name">Amount</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">DH</span>
                              <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                                className="form-control"
                                placeholder="100"
                                aria-label="Amount (to the nearest dollar)"
                              />
                              <span className="input-group-text">.00</span>
                            </div>
                          </div>
                          <div className="col mb-3 col-6">
                            <label className="col-sm-2 col-form-label" for="basic-default-name">Operator</label>
                            <div>
                            <select className="form-select" id="exampleFormControlSelect1" name='operator' value={operat} aria-label="Default select example" onChange={(e)=>setOperator(e.target.value)}>
                              <option selected>--Select Operator</option>
                              {operators.map((operator) => (
                              <option value={JSON.stringify(operator)}>{operator.name}</option>
                              ))}
                            </select>
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button onClick={(e)=>handleCreation(e)} className="btn btn-primary">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhone