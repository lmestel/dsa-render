import { render } from "preact-render-to-string";

import { BlogAside } from "@kickstartds/ds-agency/blog-aside";
import { BlogHead } from "@kickstartds/ds-agency/blog-head";
import { BlogOverview } from "@kickstartds/ds-agency/blog-overview";
import { BlogPost } from "@kickstartds/ds-agency/blog-post";
import { BlogTeaser } from "@kickstartds/ds-agency/blog-teaser";
import { Button } from "@kickstartds/ds-agency/button";
import { ButtonGroup } from "@kickstartds/ds-agency/button-group";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Faq } from "@kickstartds/ds-agency/faq";
import { Feature } from "@kickstartds/ds-agency/feature";
import { Features } from "@kickstartds/ds-agency/features";
import { Footer } from "@kickstartds/ds-agency/footer";
import { Gallery } from "@kickstartds/ds-agency/gallery";
import { Header } from "@kickstartds/ds-agency/header";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Image } from "@kickstartds/ds-agency/image";
import { ImageText } from "@kickstartds/ds-agency/image-text";
import { Logo } from "@kickstartds/ds-agency/logo";
import { Logos } from "@kickstartds/ds-agency/logos";
import { NavMain } from "@kickstartds/ds-agency/nav-main";
import { PageWrapper } from "@kickstartds/ds-agency/page-wrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { Split } from "@kickstartds/ds-agency/split";
import { Stats } from "@kickstartds/ds-agency/stats";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Testimonial } from "@kickstartds/ds-agency/testimonial";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { Text } from "@kickstartds/ds-agency/text";

const components = {
  BlogAside,
  BlogHead,
  BlogOverview,
  BlogPost,
  BlogTeaser,
  Button,
  ButtonGroup,
  Cta,
  Faq,
  Feature,
  Features,
  Footer,
  Gallery,
  Header,
  Headline,
  Image,
  ImageText,
  Logo,
  Logos,
  NavMain,
  PageWrapper,
  Section,
  Split,
  Stats,
  TeaserCard,
  Testimonial,
  Testimonials,
  Text,
};

try {
  const [, componentName, strigifiedProps = "{}"] = scriptArgs;
  if (!componentName) {
    throw "component argument missing";
  } else if (!(componentName in components)) {
    throw "unknown component";
  }
  print(renderComponent(components[componentName], parseJson(strigifiedProps)));
} catch (error) {
  std.err.puts(error);
  std.exit(1);
}

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    throw `error while parsing props - ${error}`;
  }
}
function renderComponent(Component, props) {
  try {
    return render(<Component {...props} />);
  } catch (error) {
    throw `error while rendering component - ${error}`;
  }
}
