import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import "./FeatureAsmaulHusna.scss";
import FeatureAsmaulSkeleton from "../featureAsmaulSkeleton/FeatureAsmaulSkeleton";

const mapStateToProps = (state) => {
  return {
    items: state.asmaulhusna.items,
    error: state.asmaulhusna.error,
    loading: state.asmaulhusna.loading,
  };
};

const FeatureAsmaulHusna = (props) => {
  console.log(props);
  const { items, loading, error } = props;
  if (error) return <h1>Error</h1>;

  return (
    <section id="featured-asmaulhusna">
      <Container>
        <Grid container spacing={3}>
          {loading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => (
                <FeatureAsmaulSkeleton key={value} />
              ))}
            </>
          ) : (
            items.map((item) => (
              <Grid item sm={6} md={4} xs={12} spacing={3}>
                <div className="asmaul-card">
                  <h2 className="text">{item.name}</h2>
                  <p className="textTransliteration">{`${item.number}. ${item.transliteration}`}</p>
                  <p className="textTranslation">{item.en.meaning}</p>
                </div>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default connect(mapStateToProps)(FeatureAsmaulHusna);
