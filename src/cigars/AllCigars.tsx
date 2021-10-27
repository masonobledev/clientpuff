import React, { Component } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import APIURL from "../helpers/environment";

type AllProps = {
  token: string;
};

export default class AllCigars extends Component<AllProps, any> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      cigars: [],
    };
  }

  componentDidMount() {
    fetch(`${APIURL}/cigar/`, {
      method: "GET",
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((response) => response.json())
      .then((cigarsList) => {
        this.setState({ cigars: cigarsList.data });
        console.log("this.state.cigars");
        console.log(this.state.cigars);
      });
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {this.state.cigars.map((cigar: any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={this.state.cigars.indexOf(cigar)}
            >
              <Card>
                <CardHeader
                  title={`${cigar.brand}`}
                  subheader={`origin : ${cigar.origin}`}
                />
                <CardContent>
                  <p>
                    <b>Profile:</b> {cigar.profile}
                  </p>
                  <p>
                    <b>Shape:</b> {cigar.shape}
                  </p>
                  <p>
                    <b>Wrapper:</b> {cigar.wrapper}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
