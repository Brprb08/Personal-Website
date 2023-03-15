import React, {useState} from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from '../documents/BPelto.pdf'

export default function Resume() {

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

  <div className='pdf-wrapper' style={{display: loading ? 'none' : 'flex'}}>
    <div className='pdf-doc'>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>

    <div className='right-side-res'>
      <div className='res-info'>
        <h1 className="info-res"> 
          <span className="reh">C</span>
          <span className="reh">u</span>
          <span className="reh">r</span>
          <span className="reh">r</span>
          <span className="reh">e</span>
          <span className="reh">n</span>
          <span className="reh">t</span>
          &nbsp;
          <span className="reh">R</span>
          <span className="reh">e</span>
          <span className="reh">s</span>
          <span className="reh">u</span>
          <span className="reh">m</span>
          <span className="reh">e</span>
        </h1>
      </div>

      <div className="page-change">
        <p className='page-number'>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className='page-btn'>
            <div className='pdf-btn-wrap'>
                <button 
            type="button" 
            disabled={pageNumber <= 1} 
            onClick={previousPage}
            className="pdf-btn"
          > 
            Previous 
          </button>
            </div>
          <div className='pdf-btn1-wrap'>
            <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="pdf-btn1"
          >
            Next
          </button>
          </div>
          
        </div>
      </div>

      <div className='download-res'>
        <a href={pdfFile} download="Brendan-Pelto-Resume" target='_blank' style={{textDecoration: 'none'}}>
          <button className='download-btn'>Download Resume</button>
        </a>
      </div>
    </div>
  </div>
</div>
    )
}

