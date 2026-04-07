import { fetchResources, fetchResourceById } from "./components/api/resources"; 

export async function resourceDirectoryLoader() {
  const resources = await fetchResources();
  return { resources };
}

export async function adminLoader({ params }) {
  const resources = await fetchResources();

  if (!params.resourceId) {
    return {
      resources,
      resourceId: null,
      selectedResource: null,
    };
  }

  const selectedResource = await fetchResourceById(params.resourceId);

  return {
    resources,
    resourceId: params.resourceId,
    selectedResource,
  };
}