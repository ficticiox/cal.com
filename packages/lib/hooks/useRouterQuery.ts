import { useSearchParams } from "next/navigation";

/**
 * This hook returns the query object from the router. It is an attempt to
 * keep the original query object from the old useRouter hook.
 * At least until everything is properly migrated to the new router.
 * @returns {Object} routerQuery
 */
export const useRouterQuery = () => {
  const searchParams = useSearchParams();
  const routerQuery = Object.fromEntries(searchParams.entries());
  return routerQuery;
};