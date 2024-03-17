export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get('title');
      const description = formData.get('description');
      // Process the form data and perform actions
      return { success: true };
    },
  };