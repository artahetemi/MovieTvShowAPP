import { useContext } from "react";
import { TvShowContext } from "../pages/TvShowApp";

import {
  Card,
  Grid,
  CardOverflow,
  AspectRatio,
  CardContent,
  Divider,
  Typography,
} from "@mui/joy";

// Define a default image URL for TV shows
const defaultTvShowImg = "https://example.com/default-tv-show-image.jpg";

export default function TvShowList() {
  let imgUrl = "https://image.tmdb.org/t/p/w500";

  const { tvShows } = useContext(TvShowContext);

  return (
    <div style={{ overflowY: "auto", maxHeight: "600px" }}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {tvShows.length === 0 ? (
          <div className="no-data-msg">
            <p>No TV Shows found!</p>
          </div>
        ) : (
          tvShows.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
              <Card
                color="success"
                orientation="vertical"
                size="md"
                variant="soft"
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img
                      src={
                        item.poster_path == null
                          ? defaultTvShowImg
                          : imgUrl + item.poster_path
                      }
                      srcSet={
                        item.poster_path == null
                          ? defaultTvShowImg
                          : imgUrl +
                            item.poster_path +
                            "?auto=format&fit=crop&w=318&dpr=2 2x"
                      }
                      loading="lazy"
                      alt={item.name}
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md">{item.name}</Typography>

                  <div className="overview">
                    {item.overview
                      ? item.overview
                      : "Tv Show overview coming soon..."}
                  </div>
                </CardContent>
                <CardOverflow
                  variant="soft"
                  sx={{ bgcolor: "background.level1" }}
                >
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      Total votes: {item.vote_count}
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      {item.first_air_date}
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      {item.original_language.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
