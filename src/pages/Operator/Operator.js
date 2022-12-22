import React from 'react'
import axios from 'axios'

function Operator() {

    const [operators, setOperators] = React.useState([])

    const loadOperators = async()=>{
        const all = await axios.get('http://localhost:2022/operator/all')
        setOperators(all.data)
        console.log(all.data)
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
                    <img className="card-img-top" src={"../assets/img/operators/"+operator.image} alt="Card image cap"  height={406} width={'auto'}/>
                    <div className="card-body">
                        <h5 className="card-title">{operator.name}</h5>
                        <p className="card-text">
                        The operator {operator.name}.
                        </p>
                        <a href="#" className="btn btn-outline-info">edit</a>
                        <a href="#" className="btn btn-outline-danger" style={{ marginLeft: 10 }}>edit</a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Operator