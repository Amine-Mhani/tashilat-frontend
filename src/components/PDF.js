import React, { Component ,useRef} from 'react';
import Pdf  from 'react-to-pdf';
import { useReactToPrint } from "react-to-print";
import '../assets/css/hidden.css';
import '../assets/css/pdfCss.css';

// const ref =React.createRef();
// const componentRef = useRef();
// const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
const PDF = (props) => {
    const ref =React.createRef();
    const [showResults, setShowResults] = React.useState(false)
const componentRef = useRef();
const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    return(
        <>
        <div style={{margin:"0px"}} >
        <button onClick={handlePrint} className="dropdown-item"><i className="bx bxs-file-pdf me-1"></i> PDF</button>
        <div className='rowRegistration' ref={componentRef}>
            {/* <h1>{props.first_name}</h1>
            <h1>{props.last_name}</h1> */}

            {/* debut dernierement ajouté */}
<div class="container">
    <div class="row justify-content-center" >
    <img class="img-responsive" alt="iamgurdeeposahan" src="C:\Users\pc\Desktop\Tahilat-front\frontend\src\assets" style={{width: "200px",borderRadius:"75px"}} />
    </div>

            <div class="receipt-main"></div>
            <center>
            <div class="row d-flex justify-content-center">
    			
            <div class="col-md-4 text-left">
					{/* <div class="col-xs-6 col-sm-6 col-md-6 text-left"> */}
						<div>
							<h5>TechiTouch.</h5>
							<p>+91 12345-6789 <i class="fa fa-phone"></i></p>
							<p>info@gmail.com <i class="fa fa-envelope-o"></i></p>
							<p>Australia <i class="fa fa-location-arrow"></i></p>
						</div>
					{/* </div> */}
            </div>
			
          
            <div class="col-md-8"> 
						<div>
							<h5>Gurdeep Singh <small>  |   Lucky Number : 156</small></h5>
							<p><b>Mobile :</b> +91 12345-6789</p>
							<p><b>Email :</b> info@gmail.com</p>
							<p><b>Address :</b> Australia</p>
						</div>
					</div>
					
				
         
                    </div></center>
            <div>
                    <div class="d-flex justify-content-center text-center">
						
							<h1>{props.wifi.id}</h1>
						
					</div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-md-9">Payment for August 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 15,000/-</td>
                        </tr>
                        <tr>
                            <td class="col-md-9">Payment for June 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 6,00/-</td>
                        </tr>
                        <tr>
                            <td class="col-md-9">Payment for May 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 35,00/-</td>
                        </tr>
                        <tr>
                            <td class="text-right">
                            <p>
                                <strong>Total Amount: </strong>
                            </p>
                            <p>
                                <strong>Late Fees: </strong>
                            </p>
							<p>
                                <strong>Payable Amount: </strong>
                            </p>
							<p>
                                <strong>Balance Due: </strong>
                            </p>
							</td>
                            <td>
                            <p>
                                <strong><i class="fa fa-inr"></i> 65,500/-</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> 500/-</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i> 1300/-</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i> 9500/-</strong>
                            </p>
							</td>
                        </tr>
                        <tr>
                           
                            <td class="text-right"><h2><strong>Total: </strong></h2></td>
                            <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i> 31.566/-</strong></h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
			
			<div class="row d-flex justify-content-center">
				<div class="receipt-header receipt-header-mid receipt-footer">
					<div class="col-xs-8 col-sm-8 col-md-8 text-left">
						<div class="receipt-center d-flex justify-content-center">
							<p><b>Date :</b> 15 Aug 2016</p>
							<h5 style={{color: "rgb(140, 140, 140)"}}>Thank you for your business!</h5>
						</div>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4">
						<div class="receipt-right">
							<h1>Signature</h1>
						</div>
					</div>
				</div>
            </div>
			
        </div>    
	</div>


        


            {/* dernierement ajouté */}


        </div>      
       
        
        </>
    );

}

export default PDF;