import React, {useState, useEffect} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
// import pdfFile from '../../public/BPelto.pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


 export  default function Resume() {
    // const pdfjs = await import('pdfjs-dist/build/pdf');
    // const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
    // pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    


    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        loadFucntion();
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage(){
        changePage(1);
    }

    const[loading, setLoading] = useState(true);



    const loadFucntion = () => {
        setTimeout(() => {
                
            setLoading(false);
        },1000);
    }

    useEffect(() => {
      onDocumentLoadSuccess(2);
      // Set a timeout to simulate loading time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust time as needed
      
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }, []);

    return ( 
 
<div className='res-wrap'>
  <div className="loader" style={{display: loading ? 'flex' : 'none'}}>
    <div className="text">
      Loading...
    </div>
    <div className='loading'>
      <div className='line-box'>
        <div className='line'></div>
      </div>
    </div>
  </div>

  <div className='page-wrapper' style={{display: loading ? 'none' : 'grid'}}>
    <div className='resume-page-header-wrapper'>
      <h1 className="resume-header"> 
        <span className="rh">C</span>
        <span className="rh">u</span>
        <span className="rh">r</span>
        <span className="rh">r</span>
        <span className="rh">e</span>
        <span className="rh">n</span>
        <span className="rh">t</span>
        &nbsp;
        <span className="rh">R</span>
        <span className="rh">e</span>
        <span className="rh">s</span>
        <span className="rh">u</span>
        <span className="rh">m</span>
        <span className="rh">e</span>
      </h1>
    </div>
    <div className='pdf-doc-wrapper'>
      <iframe
        src="/Personal-Website/BPelto.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  </div>
</div>
    )
}

