import type { Schema, Attribute } from '@strapi/strapi';

export interface TableComponentsArticle extends Schema.Component {
  collectionName: 'components_table_components_article';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Media: Attribute.Media;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface TableComponentsArticles extends Schema.Component {
  collectionName: 'components_table_components_articles';
  info: {
    displayName: 'Articles';
    icon: 'book';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    article_post: Attribute.Component<'table-components.article', true>;
  };
}

export interface TableComponentsDataBlock extends Schema.Component {
  collectionName: 'components_table_components_data_blocks';
  info: {
    displayName: 'Data Block';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    Bullet_X: Attribute.Integer;
    Bullet_Y: Attribute.Integer;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Extra_text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Media: Attribute.Media;
  };
}

export interface TableComponentsMenu extends Schema.Component {
  collectionName: 'components_table_components_menus';
  info: {
    displayName: 'Menu';
    icon: 'align-justify';
  };
  attributes: {
    table: Attribute.Relation<
      'table-components.menu',
      'oneToOne',
      'api::table.table'
    >;
  };
}

export interface TableComponentsQuizzQuestions extends Schema.Component {
  collectionName: 'components_table_components_quizz_questions';
  info: {
    displayName: 'Quizz_questions';
    icon: 'chess-bishop';
    description: '';
  };
  attributes: {
    Answer_A: Attribute.String;
    Answer_B: Attribute.String;
    Media: Attribute.Media;
    Answer_color: Attribute.String;
    Actual_answer: Attribute.Enumeration<['Answer_A', 'Answer_B']>;
    Question: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Answer_text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface TableComponentsQuizz extends Schema.Component {
  collectionName: 'components_table_components_quizzes';
  info: {
    displayName: 'Quizz';
    icon: 'dice-four';
  };
  attributes: {
    Title: Attribute.String;
    Questions: Attribute.Component<'table-components.quizz-questions', true>;
  };
}

export interface TableComponentsVideoSlider extends Schema.Component {
  collectionName: 'components_table_components_video_sliders';
  info: {
    displayName: 'Video Slider';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Video: Attribute.Media;
    Poster: Attribute.Media;
  };
}

export interface TableComponentsVideo extends Schema.Component {
  collectionName: 'components_table_components_videos';
  info: {
    displayName: 'Video';
    icon: 'photo-video';
  };
  attributes: {
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Subtitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Call_to_action: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    Video_slide: Attribute.Component<'table-components.video-slider', true>;
  };
}

export interface TableComponentsWidgets extends Schema.Component {
  collectionName: 'components_table_components_widgets';
  info: {
    displayName: 'Brands';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Logos: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface WallComponentCamembert extends Schema.Component {
  collectionName: 'components_wall_component_camemberts';
  info: {
    displayName: 'Camembert';
    icon: 'chart-pie';
    description: '';
  };
  attributes: {
    Titre: Attribute.String;
    pourcentages: Attribute.Component<'wall-component.pourcentage', true>;
    column: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    pourcentage_externe: Attribute.Component<
      'wall-component.pourcentage',
      true
    >;
  };
}

export interface WallComponentGallerie extends Schema.Component {
  collectionName: 'components_wall_component_galleries';
  info: {
    displayName: 'Gallerie';
    icon: 'images';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    column: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    position: Attribute.Enumeration<['bottom', 'right']> &
      Attribute.DefaultTo<'bottom'>;
    slidesPerView: Attribute.Integer;
  };
}

export interface WallComponentMenuEntry extends Schema.Component {
  collectionName: 'components_wall_component_menu_entries';
  info: {
    displayName: 'Menu Entry';
    icon: 'bars';
  };
  attributes: {
    wall: Attribute.Relation<
      'wall-component.menu-entry',
      'oneToOne',
      'api::wall.wall'
    >;
  };
}

export interface WallComponentPlanete extends Schema.Component {
  collectionName: 'components_wall_component_planetes';
  info: {
    displayName: 'Planete';
    icon: 'dice-d6';
    description: '';
  };
  attributes: {
    PlanetCSV: Attribute.Media;
    column: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
  };
}

export interface WallComponentPourcentage extends Schema.Component {
  collectionName: 'components_wall_component_pourcentages';
  info: {
    displayName: 'Pourcentage';
    icon: 'sort-numeric-down';
    description: '';
  };
  attributes: {
    pourcentage: Attribute.Decimal;
    Titre: Attribute.String;
    hexColor: Attribute.String;
  };
}

export interface WallComponentText extends Schema.Component {
  collectionName: 'components_wall_component_texts';
  info: {
    displayName: 'Text';
    icon: 'align-left';
  };
  attributes: {
    Text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    column: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
  };
}

export interface WallComponentWallNavigationGroup extends Schema.Component {
  collectionName: 'components_wall_component_wall_navigation_groups';
  info: {
    displayName: 'Wall Navigation Group';
    icon: 'equals';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    EnglishTitle: Attribute.String;
    positionX: Attribute.Float;
    positionY: Attribute.Float;
    videoTransition: Attribute.Media;
    videoBackground: Attribute.Media;
    menu_entry: Attribute.Component<'wall-component.menu-entry', true>;
    ChineseTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'table-components.article': TableComponentsArticle;
      'table-components.articles': TableComponentsArticles;
      'table-components.data-block': TableComponentsDataBlock;
      'table-components.menu': TableComponentsMenu;
      'table-components.quizz-questions': TableComponentsQuizzQuestions;
      'table-components.quizz': TableComponentsQuizz;
      'table-components.video-slider': TableComponentsVideoSlider;
      'table-components.video': TableComponentsVideo;
      'table-components.widgets': TableComponentsWidgets;
      'wall-component.camembert': WallComponentCamembert;
      'wall-component.gallerie': WallComponentGallerie;
      'wall-component.menu-entry': WallComponentMenuEntry;
      'wall-component.planete': WallComponentPlanete;
      'wall-component.pourcentage': WallComponentPourcentage;
      'wall-component.text': WallComponentText;
      'wall-component.wall-navigation-group': WallComponentWallNavigationGroup;
    }
  }
}
