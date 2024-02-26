interface InstaloaderData {
  instaloader: Instaloader;
  node: Node;
}

interface Instaloader {
  node_type: string;
  version: string;
}

interface Node {
  __typename: string;
  caption_is_edited: boolean;
  commenting_disabled_for_viewer: boolean;
  comments_disabled: boolean;
  dimensions: Dimensions;
  display_resources: DisplayResource[];
  display_url: string;
  edge_media_preview_like: EdgeMediaPreviewLike;
  edge_media_to_caption: EdgeMediaToCaption;
  edge_media_to_comment: EdgeMediaToComment;
  edge_media_to_sponsor_user: EdgeMediaToSponsorUser;
  edge_media_to_tagged_user: EdgeMediaToTaggedUser;
  edge_sidecar_to_children: EdgeSidecarToChildren;
  edge_web_media_to_related_media: EdgeWebMediaToRelatedMedia;
  fact_check_information: any;
  fact_check_overall_rating: any;
  gating_info: any;
  has_ranked_comments: boolean;
  id: string;
  is_ad: boolean;
  is_video: boolean;
  location: any;
  media_preview: any;
  owner: Owner;
  shortcode: string;
  taken_at_timestamp: number;
  tracking_token: string;
  viewer_can_reshare: boolean;
  viewer_has_liked: boolean;
  viewer_has_saved: boolean;
  viewer_has_saved_to_collection: boolean;
  viewer_in_photo_of_you: boolean;
}

interface Dimensions {
  height: number;
  width: number;
}

interface DisplayResource {
  config_height: number;
  config_width: number;
  src: string;
}

interface EdgeMediaPreviewLike {
  count: number;
  edges: any[];
}

interface EdgeMediaToCaption {
  edges: Edge[];
}

interface Edge {
  node: Node2;
}

interface Node2 {
  text: string;
}

interface EdgeMediaToComment {
  count: number;
  edges: any[];
  page_info: PageInfo;
}

interface PageInfo {
  end_cursor: any;
  has_next_page: boolean;
}

interface EdgeMediaToSponsorUser {
  edges: any[];
}

interface EdgeMediaToTaggedUser {
  edges: any[];
}

interface EdgeSidecarToChildren {
  edges: Edge2[];
}

interface Edge2 {
  node: Node3;
}

interface Node3 {
  __typename: string;
  accessibility_caption: string;
  dimensions: Dimensions2;
  display_resources: DisplayResource2[];
  display_url: string;
  edge_media_to_tagged_user: EdgeMediaToTaggedUser2;
  fact_check_information: any;
  fact_check_overall_rating: any;
  gating_info: any;
  id: string;
  is_video: boolean;
  media_preview: string;
  shortcode: string;
  tracking_token: string;
}

interface Dimensions2 {
  height: number;
  width: number;
}

interface DisplayResource2 {
  config_height: number;
  config_width: number;
  src: string;
}

interface EdgeMediaToTaggedUser2 {
  edges: any[];
}

interface EdgeWebMediaToRelatedMedia {
  edges: any[];
}

interface Owner {
  blocked_by_viewer: boolean;
  followed_by_viewer: boolean;
  full_name: string;
  has_blocked_viewer: boolean;
  id: string;
  is_private: boolean;
  is_unpublished: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  requested_by_viewer: boolean;
  username: string;
}
