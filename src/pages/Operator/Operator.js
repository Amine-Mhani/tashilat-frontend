import React from 'react'
import axios from 'axios'

function Operator() {

    const [operators, setOperators] = React.useState([])

    const loadOperators = async()=>{
        const all = await axios.get('http://localhost:2022/operator/all')
        setOperators(all.data)
        console.log(all.data)
    }

    const deleteOperator = async(e) => {
        console.log(e.target.value)
  
  
      }
  
      const editOperator = async(e) => {
        console.log(e.target.value)
  
  
      }

    React.useEffect(()=>{
        loadOperators()
    },[])

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className='row pb-0'>
            <div className='col-11'>
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Operators /</span> list</h4>
            </div>
            <div className='col-1 pt-3'>
                <a href="/operator/add" className="btn btn-primary">add</a>
            </div>
        </div>
        <div className='row'>
            {operators.map((operator)=>(
            <div className="col-md-6 col-lg-4 mb-3" key={operator.operatorId}>
                <div className="card h-100">
                <div className='img-fluid' style={{"height": "200px","maxHeight": "200px", "background-size":"auto 100%","background-position":"50%", "background-repeat":"no-repeat","background-image": 'url(../assets/img/operators/'+operator.image+')', }}></div>
                    <div className="card-body">
                        <h5 className="card-title">{operator.name}</h5>
                        <p className="card-text">
                        The operator {operator.name}.
                        </p>
                        <button value={operator.operatorId} onClick={(e)=>editOperator(e)} className="btn btn-outline-info">edit</button>
                        <button value={operator.operatorId} onClick={(e)=>deleteOperator(e)} className="btn btn-outline-danger" style={{ marginLeft: 10 }}>delete</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Operator