
-- Lock down SECURITY DEFINER function
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- Replace permissive inquiry insert with a minimally-validated one
DROP POLICY "Anyone can send an inquiry" ON public.inquiries;
CREATE POLICY "Anyone can send an inquiry"
  ON public.inquiries
  FOR INSERT
  WITH CHECK (
    char_length(buyer_name) BETWEEN 1 AND 100
    AND char_length(phone) BETWEEN 4 AND 30
    AND char_length(message) BETWEEN 1 AND 2000
  );
