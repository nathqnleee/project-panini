import Dashboard2 from "./Dashboard2"

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="style.css"></link>
        <div className="sideleft">
          <Dashboard2/>
        
        </div>
        <div className="middle">
          <h1 id="unique">Project 1</h1>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
        </div>
        </div>
        <div className="sideright">
          <h1 id="poopy">Tasks List</h1>
        <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
        </div>
        <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
        </div>
        <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard