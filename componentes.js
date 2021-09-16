const VideoTitle =()=>{
    return <h3>Video 04 componentes</h3>
}

const CourseTitle =()=>{
    return <React.Fragment>
            <h1>Curso de React</h1>
            <VideoTitle/>
        </React.Fragment>
}

ReactDOM.render(CourseTitle(),document.getElementById("container"));