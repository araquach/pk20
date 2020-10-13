<template>
  <div id="blog" class="section is-size-5-mobile">

    @foreach($blogs as $blog)
    <div class="columns box has-margin-3">
      <a id="{{ $blog->slug }}" class="anchor"></a>
      <div class="column is-5">
        <figure class="image">
          <img src="{{ $blog->paras()->first()->para_pic }}" alt="{{ $blog->paras()->first()->para_pic_alt }}">
        </figure>
      </div>
      <div class="column">
        <h2 class="title is-4">{{ $blog->title }}</h2>
        <p>{{ $blog->paras()->first()->para }}</p>
        <p><a href="{{ URL::to('blog') }}/{{ $blog->slug }}" class="button is-primary">Read more &gt;</a></p>
        <small>Published by {{ $blog->author }}</small>
        <time datetime="{{-- $blog->created_at --}}">{{ $blog->created_at->format('d F Y') }}</time>
      </div>
    </div>
    @endforeach

  </div>
</template>