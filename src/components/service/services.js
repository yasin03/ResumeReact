import React from "react";
import SectionTitle from "../common/section-title/section-title";
import Service from "./service";

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container px-lg-5">
        <SectionTitle frontText="What I Do?" backText="Services" />
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <Service
                  icon="palette"
                  title="Graphic Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  icon="desktop"
                  title="Web Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  icon="pencil-ruler"
                  title="UI/UX Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  icon="paint-brush"
                  title="App Design &amp; Develop"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  icon="chart-area"
                  title="Business Analysis"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  icon="bullhorn"
                  title="SEO Marketing"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
