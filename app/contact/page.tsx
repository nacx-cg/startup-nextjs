import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Acerca de nosotros"
        description="Dejanos tu contacto y te llamamos a la brevedad."
      />

      <Contact />
    </>
  );
};
export default ContactPage;
