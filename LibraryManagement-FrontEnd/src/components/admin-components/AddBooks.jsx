import React from 'react';



function AddBooks(props) {
    
    function addBook(){
        var isbn = document.getElementById("isbn").value;
        var author = document.getElementById("author").value;
        var title = document.getElementById("title").value;
        var pubyear = document.getElementById("pubyear").value;
        var publisher = document.getElementById("publisher").value;
        var genre = document.getElementById("genre").value;
        var copies = document.getElementById("copies").value;
        var language = document.getElementById("language").value;
        var description = document.getElementById("description").value;

       

    }

    return (
        <div>
            <form className="row g-3 mx-4 my-4 bg-light needs-validation rounded-4 p-3" >
                <div className="col-md-6">
                    <label for="isbn" className="form-label" >ISBN</label>
                    <input type="text" className="form-control is-" id="isbn" required/>
                </div>
                <div className="col-md-6">
                    <label for="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" required/>
                </div>
                <div className="col-12">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" required />
                </div>
                <div className="col-md-3">
                    <label for="pubyear" className="form-label">Publication Year</label>
                    <input type="text" className="form-control" id="pubyear" required/>
                </div> 
                <div className="col-md-5">
                    <label for="publisher" className="form-label">Publisher</label>
                    <input type="text" className="form-control" id="publisher" required/>
                </div>
                <div className="col-md-4">
                    <label for="genre" className="form-label">Genre / Category</label>
                    <select id="genre" className="form-select" required>
                    <option selected>Choose...</option>
                    <option>Fiction</option>
                    <option>Reference</option>
                    <option>Biography</option>
                    <option>History</option>
                    <option>Science</option>
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Education</option>
                    <option>Poetry</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="copies" className="form-label">Number of Copies</label>
                    <input type="number" className="form-control" id="copies" required/>
                </div>
                <div className="col-md-3">
                    <label for="language" className="form-label">Language</label>
                    <select id="language" className="form-select" required>
                    <option selected>Choose...</option>
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                    <option>French</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" required/>
                </div> 
                <div className="col-12 position-relative">
                    <button type="button" className="btn btn-primary rounded-pill" onClick={addBook}>Add Book</button>
                </div>
            </form>
        </div>
    );
}

export default AddBooks;