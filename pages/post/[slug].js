import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectToPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      window.location.replace(`https://sildenafilcm.com/${slug}`);
    }
  }, [slug]);

  return <p>Redirecting...</p>;
};

export default RedirectToPost;
