import {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      currentIndex: 0,
    }
  }

  componentDidMount() {
    const jsonData = [
      {
        name: 'John Smith',
        location: 'New York, NY',
      },
      {
        name: 'Jane Doe',
        location: 'Los Angeles, CA',
      },
      {
        name: 'Bob Johnson',
        location: 'Chicago, IL',
      },
      {
        name: 'Emily Davis',
        location: 'Houston, TX',
      },
      {
        name: 'Michael Brown',
        location: 'Phoenix, AZ',
      },
      {
        name: 'Sarah Miller',
        location: 'Philadelphia, PA',
      },
      {
        name: 'David Garcia',
        location: 'San Antonio, TX',
      },
      {
        name: 'Jessica Rodriguez',
        location: 'San Diego, CA',
      },
      {
        name: 'Mark Wilson',
        location: 'Dallas, TX',
      },
      {
        name: 'Elizabeth Martinez',
        location: 'San Jose, CA',
      },
      {
        name: 'Joshua Hernandez',
        location: 'Austin, TX',
      },
      {
        name: 'Karen Moore',
        location: 'Jacksonville, FL',
      },
      {
        name: 'Brian Jackson',
        location: 'Fort Worth, TX',
      },
      {
        name: 'Heather Anderson',
        location: 'Columbus, OH',
      },
      {
        name: 'Teresa Thomas',
        location: 'Charlotte, NC',
      },
      {
        name: 'Dennis Mitchell',
        location: 'Indianapolis, IN',
      },
      {
        name: 'Cynthia Lee',
        location: 'Seattle, WA',
      },
      {
        name: 'Adam Hall',
        location: 'Denver, CO',
      },
      {
        name: 'Nancy Allen',
        location: 'El Paso, TX',
      },
      {
        name: 'Lisa King',
        location: 'Washington, DC',
      },
      {
        name: 'William Wright',
        location: 'Boston, MA',
      },
      {
        name: 'Mary Scott',
        location: 'Nashville, TN',
      },
      {
        name: 'Kathryn Green',
        location: 'Portland, OR',
      },
      {
        name: 'Gerald Baker',
        location: 'Vancouver, BC',
      },
      {
        name: 'Eric Cooper',
        location: 'Sacramento, CA',
      },
      {
        name: 'Stephanie Gomez',
        location: 'Oklahoma City, OK',
      },
      {
        name: 'Edward Kelly',
        location: 'Tulsa, OK',
      },
      {
        name: 'Ashley Sanders',
        location: 'Winnipeg, MB',
      },
    ]

    this.setState({data: jsonData})
  }

  handleNextPerson = () => {
    const {data, currentIndex} = this.state

    if (currentIndex < data.length - 1) {
      this.setState({currentIndex: currentIndex + 1})
    } else {
      // eslint-disable-next-line
      alert('No People found!')
    }
  }

  render() {
    const {data, currentIndex} = this.state

    const currentPerson = data[currentIndex]

    return (
      <div className="App">
        <div className="topCard">
          <h1 className="heading">Peoples Data</h1>
          <button
            type="submit"
            onClick={this.handleNextPerson}
            className="button"
          >
            Next Person
          </button>
        </div>

        <div className="person-card">
          {currentPerson && (
            <div>
              <div className="name">
                <h2>Name: {currentPerson.name}</h2>
              </div>
              <div className="location">
                <p className="loc">Location: {currentPerson.location}</p>
              </div>
            </div>
          )}
        </div>
        <p className="desc">Currently showing 1 people</p>
      </div>
    )
  }
}

export default App
