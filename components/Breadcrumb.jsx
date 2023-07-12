import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumb = () => {
  const router = useRouter();
  const { pathname } = router;

  const pathParts = pathname.split("/").filter((part) => part !== "");

  console.log(pathParts); // Output: "/example"

  return (
    <>
      <div className="container capitalize flex gap-2 opacity-50">
        {pathParts.map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && " | "}
            <Link href={`/${pathParts.slice(0, index + 1).join("/")}`}>
              {part}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
