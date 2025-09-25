"use client";
import RevealText from "@/components/animation/RevealText";
import StackCards from "@/components/animation/StackCards";
import Image from "next/image";
import servicesData from "@/data/services.json";
import { useService, Service } from "@/contexts/ServiceContext";
import { getImagePath } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="inner inner-stack-bottom services">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Projects</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
                {/* Content Block - Section Name Start */}
              </div>
            </div>
            {/* Inner Section Name End */}
            {/* Inner Section Content Start */}
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                {/* Content Block - H2 Section Title Start */}
                <div className="content__block pre-stack-text-block">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Personnal &amp;
                      <br />
                      scholar projects
                    </RevealText>
                    <p className="h2__text type-basic-160lh animate-in-up">
                      During my studies, I was led to carry out a large number of diverse and very challenging projects, which allowed me to improve quickly. In addition, out of passion, I was also able to carry out other projects on my own to discover other aspects of IT.
                    </p>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Services/Features Stacking Cards Block Start */}
                <div className="content__block">
                  <StackCards className="stack-wrapper">
                    {servicesData.map((it) => (
                      <ServiceItem
                        key={it.id}
                        item={it}
                      />
                    ))}
                  </StackCards>
                </div>
                {/* Content Block - Services/Features Stacking Cards Block End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ item }: { item: Service }) {
  const { setSelectedService } = useService();
  
  return (
    <div 
      onClick={() => setSelectedService(item)}
      className="services-stack__inner popup-trigger"
      style={{ cursor: 'pointer' }}
    >
      <div className="services-stack__title">
        <h3
          dangerouslySetInnerHTML={{
            __html: item.title?.replace(/\n/g, "<br />") || "",
          }}
        />
      </div>
      <div className="services-stack__descr">
        <i className={item.icon} />
        <p className="services-stack__text type-basic-160lh">
          {item.text}
        </p>
      </div>
      <div className="services-stack__image">
        <Image
          className="service-img service-img-s"
          alt={item.title || "Service"}
          src={getImagePath(item.imgS  || "")}
          width={1200}
          height={1000}
        />
        <Image
          className="service-img service-img-m"
          alt={item.title || "Service"}
          src={getImagePath(item.imgM || "")}
          width={800}
          height={1000}
        />
      </div>
    </div>
  );
}
