"use client";

import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactForm } from "@/lib/schemas/contact";
import React from "react";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useHookForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  // Formspree submit hook (we only use it to submit; validation stays with RHF+Zod)
  const [fsState, fsSubmit] = useForm<ContactForm>("meoljlry");

  // helper to safely index validation errors for keys like "E-mail"
  type ErrorsMap = { [k: string]: { message?: string } | undefined };
  const errs = errors as unknown as ErrorsMap;

  const onSubmit = async (data: ContactForm) => {
    try {
      // submit validated data to Formspree (replace form key above with your real id)
      await fsSubmit(data);
      reset();
      toast.success("Message sent — thanks!");
    } catch {
      // ignore for now
      toast.error("Submission failed — please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="inner contact inner-grid-bottom no-padding-bottom"
    >
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Contact</span>
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
                <div className="content__block section-form-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Just say hello!
                    </RevealText>
                    <p className="h2__text text-twothirds type-basic-160lh animate-in-up">
                      Want to know more about me, tell me about your project or
                      just to say hello? Drop me a line and I&apos;ll get back
                      as soon as possible.
                    </p>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Contact Form Start */}
                <div className="content__block grid-block pre-grid-items">
                  <div className="form-container">
                    {/* Reply Messages Start */}
                    <div className="form__reply centered text-center">
                      <i className="ph-thin ph-smiley reply__icon" />
                      <p className="reply__title">Done!</p>
                      <span className="reply__text">
                        Thanks for your message. I&apos;ll get back as soon as
                        possible.
                      </span>
                    </div>
                    {/* Reply Messages End */}
                    {/* Contact Form Start */}
                    <form
                      className="form contact-form"
                      id="contact-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Hidden Required Fields */}
                      <input
                        type="hidden"
                        name="project_name"
                        defaultValue="Blayden Template"
                      />
                      <input
                        type="hidden"
                        name="admin_email"
                        defaultValue="support@mixdesign.club"
                      />
                      <input
                        type="hidden"
                        name="form_subject"
                        defaultValue="Contact Form Message"
                      />
                      {/* END Hidden Required Fields*/}
                      <div className="container-fluid p-0">
                        <div className="row gx-0">
                          {/* React Hook Form inputs */}
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Name")}
                              type="text"
                              name="Name"
                              placeholder="Your name*"
                            />
                            {errors.Name && (
                              <p className="form-error">
                                {String(errors.Name.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Company")}
                              type="text"
                              name="Company"
                              placeholder="Company name"
                            />
                            {errors.Company && (
                              <p className="form-error">
                                {String(errors.Company.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("E-mail")}
                              type="email"
                              name="E-mail"
                              placeholder="Email*"
                            />
                            {errs["E-mail"] && (
                              <p className="form-error">
                                {String(errs["E-mail"]?.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Phone")}
                              type="tel"
                              name="Phone"
                              placeholder="Phone"
                            />
                            {errors.Phone && (
                              <p className="form-error">
                                {String(errors.Phone.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 form__item animate-in-up">
                            <textarea
                              {...register("Message")}
                              name="Message"
                              placeholder="A few words about your project*"
                              defaultValue={""}
                            />
                            {errors.Message && (
                              <p className="form-error">
                                {String(errors.Message.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 form__item animate-in-up">
                            <HoverCursorEffect
                              as="button"
                              className="btn btn-default hover-default"
                              type="submit"
                              disabled={isSubmitting || fsState.submitting}
                            >
                              <span className="btn-caption">
                                Submit request
                              </span>
                            </HoverCursorEffect>
                          </div>
                        </div>
                      </div>
                    </form>
                    <ToastContainer position="bottom-right" />
                    {/* Contact Form End */}
                  </div>
                </div>
                {/* Content Block - Contact Form End */}
                {/* Content Block - Contact Data Start */}
                <div className="content__block grid-block">
                  <div className="container-fluid p-0 contact-data">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 col-lg-3 contact-data__item grid-item">
                        <p className="contact-data__title tagline-chapter animate-in-up">
                          Location
                        </p>
                        <p className="contact-data__text small type-basic-160lh">
                          <a
                            className="link-small-160lh animate-in-up"
                            href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                            target="_blank"
                          >
                            Odesa, Ukraine
                            <br />
                            65000
                          </a>
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 contact-data__item grid-item">
                        <p className="contact-data__title tagline-chapter animate-in-up">
                          Location
                        </p>
                        <p className="contact-data__text small type-basic-160lh">
                          <a
                            className="link-small-160lh animate-in-up"
                            href="https://maps.app.goo.gl/CGucvMFbkYuZiprv6"
                            target="_blank"
                          >
                            Kyiv, Ukraine
                            <br />
                            02000
                          </a>
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 contact-data__item grid-item">
                        <p className="contact-data__title tagline-chapter animate-in-up">
                          Phone
                        </p>
                        <p className="contact-data__text small type-basic-160lh">
                          <a
                            className="link-small-160lh animate-in-up"
                            href="tel:+12127089400"
                          >
                            +1 212-708-9400
                          </a>
                          <br />
                          <a
                            className="link-small-160lh animate-in-up"
                            href="tel:+15104570211"
                          >
                            +1 510-457-0211
                          </a>
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 contact-data__item grid-item">
                        <p className="contact-data__title tagline-chapter animate-in-up">
                          Email
                        </p>
                        <p className="contact-data__text small type-basic-160lh">
                          <a
                            className="link-small-160lh animate-in-up"
                            href="mailto:example@example.com?subject=Message%20from%20your%20site"
                          >
                            hello@example.com
                          </a>
                          <br />
                          <a
                            className="link-small-160lh animate-in-up"
                            href="mailto:example@example.com?subject=Message%20from%20your%20site"
                          >
                            support@example.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - Contact Data End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Footer Marquee Block) Start */}
        <div className="footer footer-marquee">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                {/* Content Block - Footer Marquee Start */}
                <div className="content__block no-padding">
                  <VelocityMarquee className="items items--gsap">
                    {/* single item */}
                    <div className="item item-regular text">
                      <a
                        className="item__text"
                        href="mailto:example@example.com?subject=Message%20from%20your%20site"
                      >
                        Got an idea?
                      </a>
                      <div className="item__image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92.3 93.1"
                          fill="currentColor"
                        >
                          <g>
                            <rect
                              x="45.7"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    {/* single item */}
                    <div className="item item-regular text">
                      <a
                        className="item__text"
                        href="mailto:example@example.com?subject=Message%20from%20your%20site"
                      >
                        Tell me!
                      </a>
                      <div className="item__image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92.3 93.1"
                          fill="currentColor"
                        >
                          <g>
                            <rect
                              x="45.7"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    {/* single item */}
                    <div className="item item-regular text">
                      <a
                        className="item__text"
                        href="mailto:example@example.com?subject=Message%20from%20your%20site"
                      >
                        Got an idea?
                      </a>
                      <div className="item__image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92.3 93.1"
                          fill="currentColor"
                        >
                          <g>
                            <rect
                              x="45.7"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    {/* single item */}
                    <div className="item item-regular text">
                      <a
                        className="item__text"
                        href="mailto:example@example.com?subject=Message%20from%20your%20site"
                      >
                        Tell me!
                      </a>
                      <div className="item__image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92.3 93.1"
                          fill="currentColor"
                        >
                          <g>
                            <rect
                              x="45.7"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </VelocityMarquee>
                </div>
                {/* Content Block - Footer Marquee End */}
              </div>
            </div>
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Footer Marquee Block) Start */}
      </div>
    </section>
  );
}
