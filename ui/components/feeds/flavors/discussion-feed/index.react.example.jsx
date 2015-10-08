/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Button = require('ui/components/buttons/index.react');
const Comment = require('ui/components/feeds/flavors/comment-base/index.react.example');
const CommentMinimal = require('ui/components/feeds/flavors/comment-minimal/index.react.example');
const CommentAttachment = require('ui/components/feeds/flavors/comment-with-attachments/index.react.example');
const CommentAttachmentInline = require('ui/components/feeds/flavors/comment-with-attachments/index.react.example.inline');
const CommentPublisher = require('ui/components/publishers/flavors/comment/index.react.example');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only'>

  <div className={pf('feed')}>
    <ul className={pf('feed__list')}>
      {/* Feed Item */}
      <li className={pf('feed__item')}>
        {Comment}
        <ul className={pf('comment__replies')}>
          <li className={pf('comment__overflow')}>
            <Button flavor="neutral">3 more comments</Button>
          </li>
          <li>
            {CommentMinimal}
          </li>
          <li>
            {CommentPublisher}
          </li>
        </ul>
      </li>

      {/* Feed Item */}
      <li className={pf('feed__item')}>
        {CommentAttachmentInline}
        <ul className={pf('comment__replies')}>
          <li>
            {CommentPublisher}
          </li>
        </ul>
      </li>

      {/* Feed Item */}
      <li className={pf('feed__item')}>
        {CommentAttachment}
        <ul className={pf('comment__replies')}>
          <li>
            {CommentPublisher}
          </li>
        </ul>
      </li>
    </ul>
  </div>

</div>
);


