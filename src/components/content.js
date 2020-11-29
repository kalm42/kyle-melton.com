import React from "react"

export const HTMLContent = props => {
  const { content, className } = props
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = props => {
  const { content, className } = props
  return <div className={className}>{content}</div>
}
export default Content
