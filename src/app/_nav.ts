interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Grades'
  },
  {
    name: 'Grades Viewing',
    url: '/grades',
    icon: 'icon-drop'
  },
  // {
  //   name: 'Student Deficiencies',
  //   url: 'student',
  //   icon: 'icon-drop'
  // },
  {
    title: true,
    name: 'Course Details'
  },
  {
    name: 'My Schedule',
    url: '/schedule',
    icon: 'icon-drop'
  },
  {
    name: 'Curriculum',
    url: '/curriculum',
    icon: 'icon-drop'
  }
  // {
  //   name: 'Course Offerings',
  //   url: 'student',
  //   icon: 'icon-drop'
  // },
  // {
  //   title: true,
  //   name: 'Billing/Fees'
  // },
  // {
  //   name: 'Balance Dues',
  //   url: 'student',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Lab Breakages',
  //   url: 'student',
  //   icon: 'icon-drop'
  // }
];
