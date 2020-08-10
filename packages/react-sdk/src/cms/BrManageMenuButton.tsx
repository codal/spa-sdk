/*
 * Copyright 2019-2020 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Menu, isMenu } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page/BrPageContext';

interface BrManageMenuButtonProps {
  /**
   * The related menu model.
   */
  menu: Menu;
}

/**
 * The button component that opens a menu editor.
 */
export class BrManageMenuButton extends React.Component<BrManageMenuButtonProps> {
  static contextType = BrPageContext;
  context: React.ContextType<typeof BrPageContext>;

  render() {
    if (!this.context?.isPreview()) {
      return null;
    }

    const meta = isMenu(this.props.menu)
      ? this.props.menu.getMeta()
      : this.props.menu._meta && this.context.getMeta(this.props.menu._meta);

    return meta
      ? <BrMeta meta={meta} />
      : null;
  }
}
