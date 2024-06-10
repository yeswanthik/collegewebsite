import { useEffect, useState } from "react";
import { Navbarhead } from "../Navbar/Navbar"
import { Button } from "react-bootstrap";

export const CollegeDetails=()=>{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const handleDownloadreg=(path, name)=>{
        const filePath = path;
        const link = document.createElement('a');
        link.href = filePath;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        window.open(filePath);
    }
    useEffect(() => {
        const checkScreenSize = () => {
          setIsSmallScreen(window.innerWidth < 768);
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);
    return <div>
        <Navbarhead/>
        <div className="container">
        <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2>College Details</h2>
				</div>
			</div>
		</div>
        <div className="row" >
			<div className="col-md-12 wow fadeInLeft animated animated " style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between " style={{ width: "85vw" }}>		
                <strong style={{textAlign: "justify"}}>
College Registration Ceritficate
	</strong>
   {!isSmallScreen?<Button  onClick={()=>{handleDownloadreg("pdf/regcer.pdf","regcer.pdf")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</Button>:<button className="btn"  onClick={()=>{handleDownloadreg("pdf/regcer.pdf","regcer.pdf")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</button>} </div>
			</div>
            <div className="col-md-12 wow fadeInLeft animated animated mt-2 " style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between " style={{ width: "85vw" }}>		
                <strong style={{textAlign: "justify"}}>
College NOC
	</strong>
   {!isSmallScreen?<Button  onClick={()=>{handleDownloadreg("pdf/noc.jpg","college noc")}} style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download </Button>:<button className="btn"  onClick={()=>{handleDownloadreg("pdf/noc.jpg","college noc")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</button>} </div>
	

    


			</div>
            <div className="col-md-12 wow fadeInLeft animated animated mt-2 " style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between " style={{ width: "85vw" }}>		
                <strong style={{textAlign: "justify"}}>
 BSC Affiliation
	</strong>
   {!isSmallScreen?<Button  onClick={()=>{handleDownloadreg("pdf/affiliationforBSC.jpg","Affiliation for Bsc")}} style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download </Button>:<button className="btn"  onClick={()=>{handleDownloadreg("pdf/affiliationforBSC.jpg","Affiliation for Bsc")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</button>} </div>
	

    


			</div>
            <div className="col-md-12 wow fadeInLeft animated animated mt-2 " style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between " style={{ width: "85vw" }}>		
                <strong style={{textAlign: "justify"}}>
BA Affiliation
	</strong>
   {!isSmallScreen?<Button  onClick={()=>{handleDownloadreg("pdf/affba.jpg","Affiliation for BA")}} style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download </Button>:<button className="btn"  onClick={()=>{handleDownloadreg("pdf/affba.jpg","Affiliation for BA")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</button>} </div>
			</div>
            <div className="col-md-12 wow fadeInLeft animated animated mt-2" style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between " style={{ width: "85vw" }}>		
                <strong style={{textAlign: "justify"}}>
Building Plan
	</strong>
   {!isSmallScreen?<Button  onClick={()=>{handleDownloadreg("pdf/buildingplan.pdf","BUILDINGPLAN.pdf")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</Button>:<button className="btn"  onClick={()=>{handleDownloadreg("pdf/buildingplan.pdf","BUILDINGPLAN.pdf")}}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download</button>} </div>
			</div>
            
		</div>
        </div>
    </div>
}