import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Card, Button } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import armoire from "../assets/armoire.gif"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     minHeight: 200,
//     maxWidth: 500,
//     marginBottom: 50,
//   },
//   details: {
//     display: "flex",
//     flexDirection: "column",
//     flex: 3,
//   },
//   // content: {
//   //   flex: "1 0 auto",
//   // },
//   cover: {
//     flex: 2,
//   },
// }))

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1em",
  },
  media: {
    height: 140,
  },
  cover: {
    height: "200px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
})

const color = [
  "#bad5f5",
  "#F2C986",
  "#EADD86",
  "#E1C1C1",
  "#bad5f5",
  "#F2C986",
  "#EADD86",
  "#E1C1C1",
]

export default function ProjCard({
  imageUrl,
  title,
  code,
  website,
  desc,
  tags,
}) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card container className={classes.root}>
      <CardMedia className={classes.cover} image={imageUrl} title={title} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <h3 id="proj-title">{title}</h3>
          <div className="tags">
            {tags.map((tag, idx) => (
              <div className="tag" style={{ background: color[idx] }}>
                {tag}
              </div>
            ))}
          </div>
          <p>{desc}</p>
        </CardContent>
        <CardContent>
          <div className="btn-con">
            {/* <a href={code} target="_blank" rel="noreferrer">
              <button className="btn card-btn">View Code</button>
            </a> */}
            <a className href={website} target="_blank" rel="noreferrer">
              <button className="btn card-btn">Visit Page</button>
            </a>
          </div>
        </CardContent>
      </div>
    </Card>
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia className={classes.gif} src={imageUrl} title={title} />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  )
}
