import { useEffect, useState } from "react"
import { Navbar } from "../shared/Navbar"
import travelBlogPosts from '../../data/travelBlogPosts.json'
import { DownSVG } from "../svgs"
import { BlogPost } from "./BlogPost"

export const Travel = () => {
  const [blogPosts, _setBlogPosts] = useState(travelBlogPosts)
  const [selectedBlogPostIndex, setSelectedBlogPostIndex] = useState()

  useEffect(() => {
    setSelectedBlogPostIndex(blogPosts.length)
  }, [blogPosts])

  const canDecrement = selectedBlogPostIndex > 1
  const canIncrement = selectedBlogPostIndex < blogPosts.length

  const decrementselectedBlogPostIndex = () => {
    if (canDecrement) {
      setSelectedBlogPostIndex(selectedBlogPostIndex - 1)
    }
  }

  const incrementselectedBlogPostIndex = () => {
    if (canIncrement) {
      setSelectedBlogPostIndex(selectedBlogPostIndex + 1)
    }
  }

  const selectedBlogPost = blogPosts[selectedBlogPostIndex - 1]

  return (
    <>
      <Navbar />
      <div>
        <h1 className="landing-title" style={{marginBottom: '0'}}>Travel Blog <br /></h1>
        {selectedBlogPost ? (
          <div className="max-width">
            <div className="travel-carousel-flex">
              <div 
                className={`travel-carousel-arrow ${!canDecrement && 'disabled'}`} 
                onClick={() => decrementselectedBlogPostIndex()} 
                style={{transform: "rotate(90deg)"}}
              >
                <DownSVG />
              </div>
              <h1 className="landing-title" style={{margin: '0'}}>
                <span className="highlight">Day {selectedBlogPost.day}</span>
              </h1>
              <div 
                className={`travel-carousel-arrow ${!canIncrement && 'disabled'}`} 
                onClick={() => incrementselectedBlogPostIndex()} 
                style={{transform: "rotate(-90deg)"}}
              >
                <DownSVG />
              </div>
            </div>
            <BlogPost post={selectedBlogPost}/>
          </div>
        ) : (
          <h1 className="landing-title" style={{margin: '0'}}>
            <span className="highlight">Loading...</span>
          </h1>
        )}
      </div>
    </>
  )
}

// The JSON needs to be pulled from somewhere with a fetch request really once this is hosted
// For now it can be a local JSON file